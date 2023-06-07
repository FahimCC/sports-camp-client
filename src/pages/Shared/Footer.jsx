import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../components/Logo';

const Footer = () => {
	return (
		<footer className='space-y-5 flex flex-col justify-center items-center py-5   border-t border-second'>
			<div>{logo}</div>
			<div className='font-medium flex flex-col items-center'>
				<p className='flex gap-2 text-center items-center'>
					<BsFillTelephoneFill className='text-second' />{' '}
					<span>+880 1723-XXXXXX</span>
				</p>
				<p className='flex gap-2 text-center  items-center'>
					<BsFillEnvelopeFill className='text-second' />{' '}
					<span>sports@camp.com</span>
				</p>
				<p className='flex gap-2 text-center  items-center'>
					<FaMapMarkerAlt className='text-second' />{' '}
					<span>ABC rd, Dhaka, Bangladesh</span>
				</p>
			</div>
			<div>
				<p>Copyright © 2023 - All right reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
