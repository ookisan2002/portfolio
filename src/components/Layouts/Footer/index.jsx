
import { Facebook, Github } from 'lucide-react';

const Footer = () =>{
    return(
        <div className="w-full bg-black">
            <div className="flex justify-between flex-wrap py-20 px-8 mx-auto max-w-[1248px]">
                <div className="w-full lg:w-[362px] text-white">
                    <h4 className="font-bold text-2xl mb-6">Tran Huy Bach Dai</h4>
                    <p className="text-sm">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                <div className="w-full lg:w-[362px] text-white">
                    <h4 className="font-bold text-2xl mb-6">Social</h4>
                    <div className='flex'>
                        <a href="https://www.facebook.com/ookisan.2002" className='mr-6 border border-white rounded-md p-1'>
                            <Facebook/>
                        </a>
                        <a href="https://github.com/ookisan2002" className='mr-6 border border-white rounded-md p-1'>
                            <Github />
                        </a>
                    </div>
                </div>
            </div>
            <div className=" border-t-[1px] flex justify-center items-center py-10 px-8 mx-auto max-w-[1248px]">
                <p className="text-white text-xs">© Copyright 2024 . Made by Tran Huy Bach Dai</p>
            </div>
        </div>
    )
}

export default Footer