import user from '../data/user.json'
import { Profile } from './Profile/profile'
import data from '../data/data.json'
import { Statistics } from './Statistics/statistics'
import friends from '../data/friends.json'
import {Friendlist} from './FriendList/friendlist'
import transactions from '../data/transactions.json'
import {Transactions} from './Transactions/transactions'

export const App = () => {
  return (<>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
    <Statistics
      title="Upload stats"
      stats={data} />
    <Statistics
      stats={data} />
    <Friendlist
      friends={friends} />
    <Transactions
      items={transactions} />
  </>
  );
};
