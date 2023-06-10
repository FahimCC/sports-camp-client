import SectionTitle from '../../components/SectionTitle';
import useTitle from '../../hooks/useTitle';

const MyEnrolledClasses = () => {
	useTitle('My Enrolled Classes')
	return (
		<div>
			<SectionTitle title='My Enrolled Classes' />
			<div className='overflow-x-auto'>
				<table className='table md:text-lg rounded-t-lg'>
					{/* head */}
					<thead>
						<tr className='bg-base-200 text-base'>
							<th>#</th>
							<th>Class Name</th>
							<th>Instructor Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<td>1</td>
							<td>Cricket</td>
							<td>David Whatmore</td>
							<td>$200</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyEnrolledClasses;
