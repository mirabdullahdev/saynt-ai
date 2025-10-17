'use client'
import NavTop from "@/app/admin/components/navTop";
import ViewData from "@/app/admin/components/viewData";
import { formatDate, getApi } from "@/frontend/helpers";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
    const [data, setData] = useState(null);

    const getData = async () => {
        params = await params;
        let id = params.id;

        let res = await getApi(`/api/contact/${id}/get`);
        if(res.status) {
            setData(res.data);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <NavTop title="Contact" backUrl="/admin/contact-us"></NavTop>
            {
                data ?
                (<div className='right_inner top_spacing'>
                    <div className='left_side'>
                        <ViewData title="Contact">
                            <div className='card-body'>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Id</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data?._id }</div>
                                    </div>
                                </div>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Full Name</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data?.fullname }</div>
                                    </div>
                                </div>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Phone Number</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data?.phonenumber }</div>
                                    </div>
                                </div>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Email</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data?.email }</div>
                                    </div>
                                </div>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Type</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data?.type }</div>
                                    </div>
                                </div>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Mail Sent</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data?.mailSend == "1" ? "Yes" : "No" }</div>
                                    </div>
                                </div>
                                {
                                    data?.type == "bookAppointment" ? 
                                        <div className='row_data'>
                                            <div className='left'>
                                                <div className='txt'>Appointment</div>
                                            </div>
                                            <div className='right'>
                                                <div className='txt'>{ data?.appointment && formatDate(data?.appointment) }</div>
                                            </div>
                                        </div>
                                    : ""
                                }
                            </div>
                            {
                                data.job_data && data.job_data.first_name && data.job_data.last_name ? 
                                <div className='card-footer'>
                                    <div className='sub_heading'>Job Data</div>
                                    <div className='desc' style={{ fontSize: "16px" }}>
                                        <b>First Name: </b> {data.job_data.first_name} <br /><br />
                                        <b>Last Name: </b> {data.job_data.last_name} <br /><br />
                                        <b>Country Origin: </b> {data.job_data.country_origin} <br /><br />
                                        <b>State: </b> {data.job_data.state} <br /><br />
                                        <b>Comments: </b> {data.job_data.comments} <br /><br />
                                    </div>
                                    {
                                        data?.job_data?.filePath ? 
                                            <div className="sub_heading">
                                                Download CV: <Link href={data.job_data.filePath} target="_blank" download={true} className='btn_area'>
                                                    <div className='back_btn'>
                                                        Download
                                                    </div>
                                                </Link>
                                            </div>
                                        : ""
                                    }
                                </div> : ""
                            }
                        </ViewData>
                    </div>
                    <div className='right_side'>
                        <ViewData>
                            <div className="card-body">
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Created At</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ formatDate(data.created_at) }</div>
                                    </div>
                                </div>
                            </div>
                        </ViewData>
                    </div>
                </div>) : ""
            }
        </>
    )
}
export default Page;