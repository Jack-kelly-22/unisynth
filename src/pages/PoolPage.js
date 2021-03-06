import pool_data from '../pool_data';
import user_data from '../user_data';
import PoolBox from '../components/PoolBox';
// import PoolView from '../components/PoolView';
import Tvl from '../components/Tvl';
export default function PoolPage(props) {

    return (
        <div className="justify-center">

            {/* SHOW SUMMARY OF DEPOSITS */}
            <Tvl {...pool_data} user={user_data} />
            {/* LIST OF POOLS TO DEPOSIT INTO */}


            {/* SHOW LIST OF CURRENT DEPOSITABLE POOLS AND STATS */}
            <div className="flex flex-col justify-center items-center">
                {pool_data.pools.map((pool, i) => {
                    return (<PoolBox key={i} {...pool} />);
                })}
            </div>

            {/* YOUR ASSETS */}
        </div>
    );
}