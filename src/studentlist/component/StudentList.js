import React from "react";

const getLastName = (name) => {
    let lastName = name.split(" ")[1];
};

const StudentList = (props) => {
    return (
        <div>
            <ul>
                {
                    props.name.map(name => (
                        
                        {name}
                        
                        ))
                    }
                </ul>
          </div>
    );
};

export default StudentList;
