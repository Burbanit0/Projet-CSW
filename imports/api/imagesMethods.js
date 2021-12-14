import { check } from 'meteor/check';
import { ImagesCollection } from '../db/ImagesCollection';

Meteor.methods({
    'images.insert'(img) {
        check(img, String);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }

        ImagesCollection.insert({
            img, 
            createdAt: new Date, 
            userId: this.userId,
        })
    },

    'images.remove'(imageId) {
        check(imageId, String);

        if (!this.userId) {
            throw new Meteor.Error('Access denied.');
        }

        ImagesCollection.remove(imageId);
    }
})