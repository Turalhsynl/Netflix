import React from 'react'

const Footer = () => {
    return (
        <div className='px-[18rem] text-white py-20'>
            <div className='pt-20'>
                <a className='underline text-zinc-400' href="">Questions? Contact us.</a>
                <div className='grid grid-cols-4 mt-10 text-zinc-400 gap-3'>
                    <a className='underline' href="">FAQ</a>
                    <a className='underline' href="">Help Center</a>
                    <a className='underline' href="">Acoount</a>
                    <a className='underline' href="">Media Center</a>
                    <a className='underline' href="">Investor Relations</a>
                    <a className='underline' href="">Jobs</a>
                    <a className='underline' href="">Ways to Watch</a>
                    <a className='underline' href="">Terms of Use</a>
                    <a className='underline' href="">Privacy</a>
                    <a className='underline' href="">Cookie Prefences</a>
                    <a className='underline' href="">Corporate Information</a>
                    <a className='underline' href="">Contact Us</a>
                    <a className='underline' href="">Speed Test</a>
                    <a className='underline' href="">Legal Notices</a>
                    <a className='underline' href="">Only on Netflix</a>
                </div>
            </div>
            <div className='mt-12'>
                <select className='w-[90px] h-[35px] mr-5 bg-black/60 border rounded-[5px]'>
                    <option value="" selected>English</option>
                    <option value="">Russian</option>
                </select>
                <p className='text-zinc-400 mt-8'>Netflix Azerbaijan</p>
            </div>
        </div>
    )
}

export default Footer
