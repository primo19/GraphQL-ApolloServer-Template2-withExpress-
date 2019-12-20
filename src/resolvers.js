import { Dog } from './models/dog'

export const resolvers = {
    Query: {
        helloWorld: () => 'Hello World',
        dogs: () => Dog.find()
    },
    Mutation: {
        addDog: async (_, { name }) => {
            const puppy = new Dog({ name });
            await puppy.save();
            return puppy;
        }
    }
}