package News

type News struct {
	ID int `json:"id"`
	Title string `json:"title"`
	Content string `json:"name"`
}

func (t *News) GetContent() string {
	return t.Content
}

// BookDatabase provides thread-safe access to a database of books.
type BookDatabase interface {
	ListNews() ([]*News, error)

	GetNews(id int64) (*News, error)

	AddNews(b *News) (id int64, err error)

	DeleteNews(id int64) error

	UpdateNews(b *News) error

	Close()
}