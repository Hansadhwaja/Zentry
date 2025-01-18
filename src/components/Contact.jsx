import Button from "./Button"

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} />
    </div>
)

const Contact = () => {
    return (
        <div id='contact' className='my-20 min-h-96 w-screen px-10'>
            <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
                <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:-left-12 lg:w-96'>
                    <ImageClipBox
                        src='img/contact-1.webp'
                        clipClass='contact-clip-path-1'
                    />
                    <ImageClipBox
                        src='img/contact-2.webp'
                        clipClass='contact-clip-path-2 lg:translate-y-20 translate-y-60'
                    />
                </div>
                <div className='absolute left-[15%] -top-40  w-60 sm:left-auto sm:top-2/3 sm:right-10 lg:-right-32 lg:top-20 lg:w-72 xl:-right-4'>
                    <ImageClipBox
                        src='img/swordman-partial.webp'
                        clipClass='absolute md:scale-125'
                    />
                    <ImageClipBox
                        src='img/swordman.webp'
                        clipClass='sword-man-clip-path md:scale-125'
                    />
                </div>
                <div className="flex flex-col items-center text-center mt-20 sm:-mt-12">
                    <p className="font-general text-[10px] uppercase">Join Zentry</p>
                    <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[4rem] lg:text-[6rem]">Let&apos;s b<b>u</b>ild the<br /> new era of<br /> g<b>a</b>ming t<b>o</b>gether</p>
                    <Button 
                        title='contact us'
                        containerClass='mt-10 cursor-pointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact