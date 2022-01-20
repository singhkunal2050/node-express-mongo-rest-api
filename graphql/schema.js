const expressGraphQL = require("express-graphql");
const {
  GraphQLScheme,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const Owner = require('../model/owner.model')
const Pet = require('../model/pet.model')

const OwnerType = new GraphQLObjectType({
    name: 'Owner',
    description: 'Owner Type',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The id String of the owner'
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the owner'
        },
        gender: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The gender of owner'
        },
        petCount: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The pet count of owner'
        },
        address: {
            type: GraphQLString,
            description: 'The address of owner'
        },
        id: {
            type: GraphQLInt,
            description: 'The id of owner'
        },
    })
})

const PetType = new GraphQLObjectType({
    name: 'Pet',
    description: 'Pet Type',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The id String of the Pet'
        },
        petname: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The petname'
        },
        gender: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The gender of pet'
        },
        animal: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The pet animal species'
        },
        photo: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The photo of pet'
        }
    })
})


const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        owners: {
            type: new GraphQLList(OwnerType),
            description: 'List of Owners',
            resolve: async (parent, args, context, info) => {
                const owners = await Owner.find()
                return owners
            }
        },
        owner: {
            type: OwnerType,
            description: 'Single Owner',
            args: {
                id: {
                    type: GraphQLString,
                    description: 'The id of the Owner'
                }
            },
            resolve: async (parent, args, context, info) => {
                try{
                    const owner =  await Owner.findOne({ _id: args.id }) 
                    return owner
                }catch(err){
                    return {"message":err}
                }
            }
        },
        pets: {
            type: new GraphQLList(PetType),
            description: 'List of Pets',
            resolve: async (parent, args, context, info) => {
                const pets = await Pet.find()
                return pets
            }
        },
    })
});

const RootMutationType = new GraphQLObjectType({
    name:"Mutation",
    description: "Root Mutation",

    fields: ()=>({
        createOwner: {
            type: OwnerType,
            description: 'Create a new Owner',
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'The name of the owner'
                },
                gender: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'The gender of owner'
                },
                petCount: {
                    type: new GraphQLNonNull(GraphQLInt),
                    description: 'The pet count of owner'
                },
                address: {
                    type: GraphQLString,
                    description: 'The address of owner'
                }
            },
            resolve: async (parent, args, context, info) => {
                const { name, gender, petCount, address } = args
                try {
                    const owner = await Owner.create({ name, gender, petCount, address })
                    return owner
                } catch (error) {
                    throw new Error(error)
                }
            }
        }
    })

})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})


module.exports = schema