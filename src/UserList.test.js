import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test('render the correct number of rows', () => {

    //Render the component
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'sam', email: 'sam@sam.com' }
    ];

    render(<UserList users={users} />);

    //Find all the rows in the table
    const rows = within(screen.getByTestId("users")).getAllByRole("row");

    expect(rows).toHaveLength(2);

    //Assertion: correct number of rows in the table


});

test('render the email and name of each user', () => {
    //Render the component
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'sam', email: 'sam@sam.com' }
    ];

    render(<UserList users={users} />);

    //Find all the rows in the table
    const rows = within(screen.getByTestId("users")).getAllByRole("row");

    for(let user of users){
        const name = screen.getByRole('cell', {name: user.name});
        const email = screen.getByRole('cell', {name: user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }

});