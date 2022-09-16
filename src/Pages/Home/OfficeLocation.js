import React from 'react';

const OfficeLocation = () => {
    return (
        <div className=" border-[1px] border-gray-200 p-5">
            <div>
                <div>
                    <h1 className=" mb-6 uppercase text-2xl text-center title1 font-semibold ">
                        Our Office Location
                    </h1>
                </div>
                <div className=" text-[18px] font-[400] text-gray-600">
                    <ul>
                        <li className="flex justify-start items-center my-3">
                            <span>
                                <i class="fa-sharp fa-solid fa-location-dot mr-5 text-3xl"></i>
                            </span>
                            <span>2239 Turnpike Drive, Birmingham, United States</span>
                        </li>
                        <li className="flex justify-start items-center my-3">
                            <span>
                                <i class="fa-solid fa-address-book mr-5 text-2xl"></i>
                            </span>
                            <span className=" mx-2">+85-6944-5298 </span>,
                            <span className=" mx-2">+85-5894-45547</span>
                        </li>
                        <li className="flex justify-start items-center my-5">
                            <span>
                                <i class="fa-solid fa-envelope mr-5 text-2xl"></i>
                            </span>
                            <span> abs.info@contact.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OfficeLocation;