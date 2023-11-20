import Search from "./Search";
import UserListTable from "./UserListTable";

const UserList = () => {
    return (

        <section className="card users-container">

            {/* <!-- Search bar component --> */}
            <Search />

            {/* <!-- Table component --> */}
            <UserListTable />

        </section >

    );
};

export default UserList;