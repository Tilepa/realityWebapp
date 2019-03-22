package news

import (
	"github.com/pkg/errors"
	"gopkg.in/mgo.v2"
	"services/mongodbTest/config"
)

type NewsService struct {
	collection *mgo.Collection
}

func NewUserService(session *mgo.Session, config *config.MongoConfig) *NewsService {
	collection := session.DB(config.DbName).C("news")
	return &NewsService {collection}
}

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
	if news.Id == "" {
		return errors.New("news object must have an existing id")
	}
	return s.collection.UpdateId(news.Id, &news)
}

func (s *NewsService) GetNewsById(id string) (*News, error) {
	if id == "" {
		return nil, errors.New("id must not be null")
	}

	response := News{}

	err := s.collection.FindId(id).One(&response)

	return &response, err
}

func (s *NewsService) DeleteNewsById(id string) error {
	if id == "" {
		return errors.New("id must not be null")
	}

	return s.collection.RemoveId(id)
}