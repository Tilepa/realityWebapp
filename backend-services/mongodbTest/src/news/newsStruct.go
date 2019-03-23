package news

import "gopkg.in/mgo.v2/bson"

type News struct {
	ID      bson.ObjectId `json:"_id,omitempty" bson:"_id,omitempty"`
	Title   string `json:"title,omitempty" bson:"title,omitempty"`
	Content string `json:"content,omitempty" bson:"content,omitempty"`
}
