import IconInfo from "@/assets/infoIcon";


export default function Info({ description }) {
    return (
            <div className='bg-biru font-primary'>
                <div className='w-full'>
                <IconInfo>
                <p className='text-xs'>{description}</p>
                </IconInfo>
                </div>
                
            </div>
    
    );
}
