import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle';
import useUser from '../../hooks/UseUser';
import useAdmin from '../../hooks/useAdmin';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useInstructor from '../../hooks/useInstructor';
import useTitle from '../../hooks/useTitle';

const Classes = () => {
	useTitle('Classes');

	const navigate = useNavigate();
	const [axiosSecure] = useAxiosSecure();
	const { user } = useUser();
	const { isAdmin } = useAdmin();
	const { isInstructor } = useInstructor();

	const [disable, setDisable] = useState(isAdmin || isInstructor);

	const { data: classes = [] } = useQuery({
		queryKey: ['classes'],
		queryFn: async () => {
			const res = await axiosSecure.get('/classes/approved');
			return await res.data;
		},
	});

	const handleSelect = clas => {
		if (user && user?.email) {
			const {
				_id,
				classImage,
				className,
				instructorName,
				price,
				availableSeat,
				enrollCount,
			} = clas;
			const selectedClas = {
				classId: _id,
				studentEmail: user?.email,
				classImage,
				className,
				instructorName,
				availableSeat,
				price,
				enrollCount,
				paymentStatus: 'pending',
			};
			// console.log('classes: ', selectedClas);
			axiosSecure.post(`/select-class`, selectedClas).then(res => {
				if (res.data.insertedId) {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Class has been selected',
						showConfirmButton: false,
						timer: 1000,
					});
				} else if (res.data.message === 'Class already added') {
					Swal.fire({
						position: 'top-end',
						icon: 'warning',
						title: 'This Class already selected',
						showConfirmButton: false,
						timer: 1000,
					});
				}
			});
		} else {
			Swal.fire({
				title: 'Please Login before selecting the course',
				icon: 'info',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Login Now',
			}).then(result => {
				if (result.isConfirmed) {
					navigate('/login', { state: { from: location } });
				}
			});
		}
	};

	return (
		<div className='container my-14'>
			<SectionTitle title='Classes' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10'>
				{classes?.map(clas => (
					<Link
						key={clas._id}
						className={`rounded-lg relative shadow-xl ${
							clas.availableSeat === 0 ? 'shadow-red-500' : 'shadow-primary'
						}`}
					>
						<img
							src={clas.classImage}
							className='rounded-lg object-cover w-full h-72'
							alt=''
						/>
						<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-50 w-full h-72 flex items-center justify-center text-warning '>
							<div className='flex flex-col items-center'>
								<h1 className=' text-2xl md:text-4xl font-bold mb-4'>
									{clas.className}
								</h1>
								<p>
									<b>Instructor name:</b>{' '}
									<span className='clip text-lg font-semibold'>
										{clas.instructorName}
									</span>
								</p>
								<p>
									<b>Available seats:</b> {clas.availableSeat}
								</p>
								<p>
									<b>Price:</b> ${clas.price}
								</p>
								<button
									onClick={() => handleSelect(clas)}
									className='btn btn-primary mt-4'
									disabled={isAdmin || isInstructor || clas.availableSeat === 0}
								>
									Select
								</button>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Classes;
