"use client";
import { useEffect, useRef, useState } from "react";
import TableCom from "../../components/table";
import { formatDate, getApi, getUrl, handleBulkAction, handleStatusChange, postApi } from "@/frontend/helpers";
import { Dropdown, Form, InputGroup, Spinner, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEllipsisV,
  faEye,
  faFilter,
  faSearch,
  faSort,
  faTimes,
  faTimesCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import TableHeader from "../../components/tableHeader";
import TableBody from "../../components/tableBody";
import { usePathname, useSearchParams } from "next/navigation";
import NavTop from "../../components/navTop";
import { toast } from "react-toastify";

const page = () => {
  const module = {
    api: "/api/blog/get-blogs",
    title: "Blogs",
  };

  const path = usePathname();
  const searchParams = useSearchParams();
  const emptyFilters = {
    search: "",
    createdAtFrom: "",
    createdAtTo: "",
    status: "",
    sort: "created_at",
    direction: "desc",
  };

  const [filters, setFilters] = useState(emptyFilters);
  const [listing, setListing] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const abortControllerRef = useRef(null);

  const handleSelect = (e, id, type = null) => {
    if (type == "all") {
      const checkboxes = document.querySelectorAll(
        ".listing_checks input[type='checkbox']"
      );
      let ids = [];
      if (e.target.checked) {
        checkboxes.forEach((item) => {
          item.checked = true;
          ids.push(item.value);
        });
      } else {
        checkboxes.forEach((item) => (item.checked = false));
      }
      setSelectedIds(ids);
      return true;
    }
    setSelectedIds((prevIds) =>
      prevIds.includes(id) ? prevIds.filter((i) => i !== id) : [...prevIds, id]
    );
  };

  const getListing = async () => {
    setLoading(true);
    let url = new URL(getUrl(module.api));
    let frontendUrl = new URL(path, window.location.origin);

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    for (let key in filters) {
      if (filters[key] != "") {
        url.searchParams.set(key, filters[key]);
        frontendUrl.searchParams.set(key, filters[key]);
      }
    }

    url.searchParams.set("page", page);

    history.pushState({}, "", frontendUrl);

    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;
    const res = await getApi(url, { signal });
    if (res && res.status) {
      if (res.data.data.length === 0) {
        if (page == 1) {
          setListing([]);
        }
        setHasMore(false);
      } else {
        if (page == 1) {
          setListing(res.data.data);
        } else {
          setListing((prevItems) => [...prevItems, ...res.data.data]);
        }
      }
    }
    setLoading(false);
  };

  const handleDelete = async (e, id) => {
    let res = await handleBulkAction("/api/blog/bulk-action", [id], "delete", false);
    if (res.status) {
      e.target.closest("tr").remove();
      toast.success(res.message)
    }
  };

  const handleSort = (type) => {
    let tempFilters = { ...filters };
    if (type == tempFilters.sort) {
      tempFilters.direction = tempFilters.direction == "asc" ? "desc" : "asc";
    } else {
      tempFilters.direction = "desc";
      tempFilters.sort = type;
    }
    setFilters(tempFilters);
  };

  useEffect(() => {
    if (hasMore) {
      getListing();
    }
  }, [page, hasMore]);

  useEffect(() => {
    const newFilters = {
      search: searchParams.get("search") || "",
      createdAtFrom: searchParams.get("createdAtFrom") || "",
      createdAtTo: searchParams.get("createdAtTo") || "",
      status: searchParams.get("status") || "",
      sort: searchParams.get("sort") || "created_at",
      direction: searchParams.get("direction") || "desc",
    };
  
    // Only update filters if the values have changed
    if (JSON.stringify(newFilters) !== JSON.stringify(filters)) {
      setFilters(newFilters);
    }
  }, [searchParams]);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          let reachBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
          if (reachBottom && !loading && hasMore) {
            setPage((prevPage) => prevPage + 1);
          }
      }, 200)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setHasMore(true);

    setPage((prevPage) => {
        if (prevPage !== 1) return 1; // Avoid unnecessary state updates
        return prevPage;
    });
  }, [filters]);

  return (
    <>
      <NavTop title={module.title} addUrl={"/admin/blogs/add"}>
        <Dropdown show={show}>
          <Dropdown.Toggle id="dropdown-basic">
            <div className="btn_area">
              <div className="back_btn" onClick={() => setShow(true)}>
                <span className="filter_icon">
                  <FontAwesomeIcon icon={faFilter} />
                </span>{" "}
                Filter
              </div>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="cross_icon" onClick={() => setShow(false)}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            <Dropdown.Item as={"div"}>
              <div className="date_area">
                <div className="left_side">
                  <Form.Group className="form-group">
                    <Form.Label>Created On</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          createdAtFrom: e.target.value,
                        })
                      }
                      value={filters.createdAtFrom}
                    />
                  </Form.Group>
                </div>
                <div className="right_side">
                  <Form.Group className="form-group">
                    <Form.Control
                      required
                      type="date"
                      onChange={(e) =>
                        setFilters({ ...filters, createdAtTo: e.target.value })
                      }
                      value={filters.createdAtTo}
                    />
                  </Form.Group>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item as={"div"}>
              <div className="select_area">
                <Form.Check
                  type={"radio"}
                  label="All"
                  name="status"
                  onChange={(e) => setFilters({ ...filters, status: "" })}
                />
                <Form.Check
                  type={"radio"}
                  label="Publish"
                  name="status"
                  onChange={(e) =>
                    setFilters({ ...filters, status: "publish" })
                  }
                  checked={filters.status == "publish"}
                />
                <Form.Check
                  type={"radio"}
                  label="UnPublish"
                  name="status"
                  onChange={(e) =>
                    setFilters({ ...filters, status: "unpublish" })
                  }
                  checked={filters.status == "unpublish"}
                />
              </div>
            </Dropdown.Item>
            <div className="btn_main">
              <div className="btn_area">
                <div
                  className="btn btn-primary reset_btn"
                  onClick={() => setFilters(emptyFilters)}
                >
                  Reset
                </div>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </NavTop>
      <TableCom top_spacing="top_spacing">
        <TableHeader title={module.title}>
          <div className="actions">
            <div className="actions_left">
              <Form.Group className="form-group">
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    aria-describedby="inputGroupPrepend"
                    onChange={(e) =>
                      setFilters({ ...filters, search: e.target.value })
                    }
                    value={filters.search}
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="actions_right">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <FontAwesomeIcon icon={faEllipsisV} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#"
                    onClick={() =>
                      confirm("Are You Sure?") && handleBulkAction("/api/blog/bulk-action", selectedIds, "publish")
                    }
                  >
                    <span className="publish"></span> Publish
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={() =>
                      confirm("Are You Sure?") && handleBulkAction("/api/blog/bulk-action", selectedIds, "unpublish")
                    }
                  >
                    <span className="publish unpublish"></span> UnPublish
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={() =>
                      confirm("Are You Sure?") && handleBulkAction("/api/blog/bulk-action", selectedIds, "delete")
                    }
                  >
                    <span className="cross">
                      <FontAwesomeIcon icon={faTimes} />
                    </span>{" "}
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </TableHeader>
        <TableBody>
          <Table>
            <thead>
              <tr>
                <th>
                  <Form.Check onClick={(e) => handleSelect(e, 0, "all")} />
                </th>
                <th>ID</th>
                <th role="button" onClick={() => handleSort("title")}>
                  Title <FontAwesomeIcon icon={faSort} />
                </th>
                <th role="button" onClick={() => handleSort("category")}>
                  Category <FontAwesomeIcon icon={faSort} />
                </th>
                <th role="button" onClick={() => handleSort("status")}>
                  Status <FontAwesomeIcon icon={faSort} />
                </th>
                <th role="button" onClick={() => handleSort("created_at")}>
                  Date <FontAwesomeIcon icon={faSort} />
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listing.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>
                      <Form.Check
                        onClick={(e) => handleSelect(e, item._id)}
                        className="listing_checks"
                        value={item._id}
                      />
                    </td>
                    <td>
                      {item._id.slice(0, 4)}...{item._id.slice(-6)}
                    </td>
                    <td>{item.title}</td>
                    <td>{item.categoryTitle}</td>
                    <td>
                        <Form.Group className='form-group'>
                            <Form.Check type="switch" defaultChecked={item.status == 1} onChange={(e) => handleStatusChange('/api/actions/change-status', item._id, e.target.checked, 'blogs')} />
                        </Form.Group>
                    </td>
                    <td>{formatDate(item.created_at)}</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href={`/admin/blogs/${item._id}/edit`}>
                            <span className="edit">
                              <FontAwesomeIcon icon={faEdit} />
                            </span>
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item href={`/admin/blogs/${item._id}/view`}>
                            <span className="view">
                              <FontAwesomeIcon icon={faEye} />
                            </span>
                            View
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={(e) =>
                              confirm("Are You Sure?") &&
                              handleDelete(e, item._id)
                            }
                          >
                            <span className="delete">
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </span>
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                );
              })}
              {loading ? (
                <tr align="center">
                  <td colSpan={10}>
                    <div className="text-center mt-2 w-25">
                      <Spinner animation="border" variant="dark" size="sm" />
                    </div>
                  </td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </Table>
        </TableBody>
      </TableCom>
    </>
  );
};

export default page;
