import React from "react";
import Card from "./Card";
import IconAnnounce from "@/assets/iconAnnounce";
export default function ContainerEvent({ title, subtitle, children }) {
    return (
        <>
            <div className='bg-white p-2 w-full m-auto font-primary'>
                <div className='w-11/12 pb-2 '>
                    <h1 className='text-base font-bold '>{title}</h1>
                    <p className='text-xs'>{subtitle}</p>
                </div>
                {children ? (
                    <div className=''>
                        <div className='w-full flex  overflow-x-auto  gap-3'>
                            {children}
                            <Card className='min-w-[304px] min-h-[124px]  '>
                                <div className='flex justify-center items-center h-full bg-[#F4F6F6]'>
                                    <div>
                                        <IconAnnounce className='m-auto ' />
                                        <p className='text-center text-base font-medium text-[#B3C4C5] mt-4'>
                                            Nantikan Event Lainnya di BNI Mobile Banking
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                ) : (
                    <Card className=' '>
                        <div className='flex justify-center items-center h-full bg-[#F4F6F6]'>
                            <div className='w-4/5 p-2'>
                                <IconAnnounce className='m-auto w-12 h-12' />
                                <p className=' text-center text-xs font-medium text-[#B3C4C5] '>
                                    Nantikan terus event-event menarik di BNI Mobile Banking
                                </p>
                            </div>
                        </div>
                    </Card>
                )}
            </div>
        </>
    );
}
