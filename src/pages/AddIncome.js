import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Button from '../components/Button';

const schema = yup.object({
    month: yup.string().required('Month is required'),
    income: yup.number().typeError('Income is required').positive('Income must be positive').required()
});

function AddIncome() {

    const navigate = useNavigate();

    const currentUser =
        JSON.parse(localStorage.getItem('currentUser'));

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const saveIncome = (data) => {

        if (!currentUser) {
            toast.error('Please login first');
            navigate('/login');
            return;
        }

        const incomeKey = `salaryData_${currentUser.email}`;

        let salaryData =
            JSON.parse(localStorage.getItem(incomeKey)) || [];

        const newIncome = {
            id: Date.now(),
            month: data.month,
            salary: Number(data.income)
        };

        salaryData.push(newIncome);

        localStorage.setItem(incomeKey, JSON.stringify(salaryData));

        toast.success('Income added successfully');

        reset();

    };

    return (

        <div className="main-container home-page">

            <div className="bg-sticker sticker-1">💰</div>
            <div className="bg-sticker sticker-2">₹</div>
            <div className="bg-sticker sticker-3">📈</div>

            <div className="card form-card">

                <h2 className="page-title">Add Income</h2>

                <form onSubmit={handleSubmit(saveIncome)}>

                    <input
                        className="input-box"
                        type="month"
                        {...register('month')}
                    />
                    <p className="error-text">{errors.month?.message}</p>

                    <input
                        className="input-box"
                        type="number"
                        placeholder="Enter Monthly Income"
                        {...register('income')}
                    />
                    <p className="error-text">{errors.income?.message}</p>

                    {/* <button className="main-btn" type="submit">
                        Save Income
                    </button> */}
                    <Button
                        type="submit"
                        title="Save"
                        className="main-btn"
                    />



                </form>

                <br />

                <button
                    className="secondary-btn"
                    onClick={() => navigate('/moneyportal')}
                >
                    Back
                </button>

            </div>

        </div>

    )

}

export default AddIncome;