export default class BookstoreService {

    getBooks() {
        return [
            {
                id: 1,
                title: 'Jenkins 2: Up and Running',
                author: 'Brent Laster'
            },
            {
                id: 2,
                title: 'The Site Reliability Workbook',
                author: 'Niall Murphy, David Rensin, Betsy Beyer'
            }
        ];
    }

}