export type Database = {
    users: [{
        id: number;
        name: string;
        email: string;
        password: string;
        entries: number;
        joined: Date;
    },]
};

const database: Database[] = [
    {
        users: [{
            id: 123,
            name: "John",
            email: "john@gmail.com",
            password: "123",
            entries: 0,
            joined: new Date(),
        },]
    },
];

export const DB: Database['users'] = database[0].users