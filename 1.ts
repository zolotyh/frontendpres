/**
 * Created by alexey.zolotykh on 16/11/2016.
 */

interface API {
    url:string;
}


@Injectable()
class APIImpl implements API {
    url: string;
}


@NgModule({
    providers: [{ provide: API, useClass: APIImpl }],
    bootstrap: [Widget]
})
export class AppModule { }



@Component({
    selector: 'my-heroes',
    providers: [API],
})
export class Widget { }