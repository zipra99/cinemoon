import { DetailPage } from './detail.page';
import { NavController } from '@ionic/angular';
import { MovieListService } from 'src/app/services/movie-list.service';
import { AuthenticationService } from 'src/app/services/shared/authentication.service';
import { TicketInfoService } from 'src/app/services/ticket-info.service';

describe('Component: Details', () => {

    let component: DetailPage;
    let authService: AuthenticationService;
    let movieService: MovieListService;
    let ticketService: TicketInfoService;

    let nav: NavController;


    beforeEach(() => {
        component = new DetailPage(movieService, nav, ticketService, authService);
    });

    // clear
    afterEach(() => {
        authService = null;
        movieService = null;
        ticketService = null;
        nav = null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
