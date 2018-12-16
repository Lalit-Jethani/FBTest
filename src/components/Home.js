import React, { Component } from "react";
import UserGistsContainer from "./..//components/userGists/userGistsContainer";
import SearchContainer from "./../components/ui/SearchContainer";

class Home extends Component {
    render() {
        return (
            <div>
                <SearchContainer />
                <UserGistsContainer />
            </div>
        );
    }
}

export default Home;
