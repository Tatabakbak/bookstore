export default class BookstoreService {

    getBooks() {
        return [
            {
                id: 1,
                title: 'Jenkins 2: Up and Running',
                author: 'Brent Laster',
                price: 32,
                coverImage: '/dummy-data/img/cover_1.jpg'
            },
            {
                id: 2,
                title: 'The Site Reliability Workbook',
                author: 'Niall Murphy, David Rensin, Betsy Beyer',
                price: 45,
                coverImage: '/dummy-data/img/cover_2.jpg'
            }
        ];
    }

}