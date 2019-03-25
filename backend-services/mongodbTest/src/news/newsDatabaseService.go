package news

import (
	"github.com/pkg/errors"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"mongodbTest/src/utils"
)

type NewsService struct {
	collection *mgo.Collection
}

var newsServiceStruct *NewsService

func GetNewsService() *NewsService {
	if newsServiceStruct == nil {
		newsServiceStruct = NewNewsService()
	}
	return newsServiceStruct
}

func NewNewsService() *NewsService {
	collection := utils.GetDatabaseClient().C("news")
	return &NewsService{collection}
}

//----------------------------------------------------------------------------------------

func (s *NewsService) CreateNews(news *News) error {
	if news == nil {
		return errors.New("new object must not be null")
	}

	return s.collection.Insert(&news)
}

func (s *NewsService) UpdateNews(news *News) error {
	if news == nil {
		return errors.New("news object could not be null")
	}
	if news.ID == "" {
		return errors.New("news object must have an existing id")
	}
	return s.collection.UpdateId(news.ID, &news)
}

func (s *NewsService) GetNews() ([]News, error) {
	var newsList []News
	err := s.collection.Find(nil).All(&newsList)

	if err != nil {
		return nil, err
	}

	return newsList, nil
}

func (s *NewsService) GetNewsById(id string) (*News, error) {
	if id == "" {
		return nil, errors.New("id must not be null")
	}

	response := News{}

	oid := bson.ObjectIdHex(id)

	err := s.collection.FindId(oid).One(&response)

	return &response, err
}

func (s *NewsService) DeleteNewsById(id string) error {
	if id == "" {
		return errors.New("id must not be null")
	}

	oid := bson.ObjectIdHex(id)

	return s.collection.RemoveId(oid)
}
