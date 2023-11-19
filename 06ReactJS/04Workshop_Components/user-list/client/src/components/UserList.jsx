import Search from "./Search";
import UserListTable from "./UserListTable";

const UserList = () => {
    return (

        <section className="card users-container">

            {/* <!-- Search bar component --> */}
            <Search />

            {/* <!-- Table component --> */}
            <UserListTable />

            {/* < !--New user button-- > */}
            <button className="btn-add btn">Add new user</button>

        </section >

    );
};

export default UserList;