import Express from 'express';
import graphqlHTTP from 'express-graphql';
import Schema from './schema';

const APP_PORT = 3010;

const app = Express();

app.use('/graphql', graphqlHTTP({
    schema:Schema,
    pretty:true,
    graphiql:true
}));

app.listen(APP_PORT, ()=>{
    console.log(`app is running on port ${APP_PORT}`)
});