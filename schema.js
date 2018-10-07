import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema
} from 'graphql';
import Db from './db'

const contact = new GraphQLObjectType({
    name:'contact',
    description: 'This represent a contact',
    fields:()=>{
        return {
            id:{
                type:GraphQLInt,
                resolve(contact){
                    return contact.id
                }
            },
            firstName:{
                type:GraphQLString,
                resolve(contact){
                    return contact.firstName
                }
            },
            lastName:{
                type:GraphQLString,
                resolve(contact){
                    return contact.lastName
                }
            },
            email:{
                type:GraphQLString,
                resolve(contact){
                    return contact.email
                }
            },
            phone:{
                type:GraphQLString,
                resolve(contact){
                    return contact.phone
                }
            },
            city:{
                type:GraphQLString,
                resolve(contact){
                    return contact.city
                }
            },
            state:{
                type:GraphQLString,
                resolve(contact){
                    return contact.state
                }
            },
            address:{
                type:GraphQLString,
                resolve(contact){
                    return contact.address
                }
            }
        }
    }
});

const Query = new GraphQLObjectType({
    name : 'query',
    info : 'This is root query',
    fields:()=>{
        return {
            contacts:{
                type: new GraphQLList(contact),
                resolve(root, args){
                    return Db.models.contacts.findAll({where:args})
                }
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name:'mutation',
    description:'this is use to add a contact',
    fields:()=>{
        return{
            addContact:{
                type:contact,
                args:{
                    firstName:{
                        type:new GraphQLNonNull(GraphQLString)
                    },
                    lastName:{
                        type:new GraphQLNonNull(GraphQLString)
                    },
                    email:{
                        type:new GraphQLNonNull(GraphQLString)
                    },
                    phone:{
                        type:new GraphQLNonNull(GraphQLString)
                    },
                    city:{
                        type:new GraphQLNonNull(GraphQLString)
                    },
                    state:{
                        type:new GraphQLNonNull(GraphQLString)
                    },
                    address:{
                        type:new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve(root,args){
                    return Db.models.contacts.create({
                        firstName:args.firstName,
                        lastName:args.lastName,
                        email:args.email,
                        phone:args.phone,
                        city:args.city,
                        state:args.state,
                        address:args.address
                    })
                }
            },
            
           
        }
    }
})

const Schema =new GraphQLSchema({
    query:Query,
    mutation:Mutation,
});

export default Schema;