import Widget from '../../components/widget/Widget';
import './home.scss';
import {LineChart} from '@mui/x-charts'

const Home = () => {
    let avg_basket_val = 100;
    let total_customers = 1000;
    let total_unreddemed_points = 10000;
    let rewards_issued = 363;
    return (
        <div className="home">
            <div className='widgets'>
                <Widget title="Total No. of Unredeemed Points" value={total_unreddemed_points} />
                <Widget title="Average Basket" value={avg_basket_val} />
                <Widget title="Total Customers" value={total_customers} />
                <Widget title="Total Rewards Issued" value={rewards_issued} />
            </div>
            <div className='custLineChart'>
                <div className='titleLine'>
                    Total number of Customers
                </div>
                <LineChart className='lineChart'
                    xAxis={[{ data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] }]}
                    // data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] }]
                    series={[
                        {
                        data: [2, 5.5, 2, 8.5, 1.5, 5, 8, 3.5, 12, 34, 5, 7],
                        area: false,
                        },
                    ]}
                    width={1136}
                    height={400}
                    />
            </div>
        </div>
    )
}

export default Home;