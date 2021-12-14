import { Meteor } from 'meteor/meteor';
import { ImagesCollections } from '/imports/db/ImagesCollections';

Meteor.publish('images', function publishImages() {
    return ImagesCollections.find({ userId: this.userId });
})