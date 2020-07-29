import React, {Component} from 'react';
import {
    Contact,
    CouchSerfing,
    FaceBook,
    GitHub,
    Gmail, GmailLink,
    Instagram,
    LinkedIn, Main,
    Skype, SkypeLink,
    Stack,
    Telegram, TelegramLink, TelephoneLink,
    Website
} from "./util";

import {
    CouchSerfingLink,
    FaceBookLink,
    GitHubLink,
    InstagramLink,
    LinkedInLink,
    StackLink,
    WebsiteLink
} from './util'


class App extends Component {

    goToPage = (page) => {
        switch (page) {
            case 'website':
                window.open(WebsiteLink);
                break;

            case 'github':
                window.open(GitHubLink);
                break;

            case 'facebook':
                window.open(FaceBookLink);
                break;

            case 'instagram':
                window.open(InstagramLink);
                break;

            case 'linkedIn':
                window.open(LinkedInLink);

                break;

            case 'couchSerfing':
                window.open(CouchSerfingLink);
                break;

            case 'stack':
                window.open(StackLink);
                break;

            case 'contact':
                window.open(TelephoneLink)
                break;

            case 'skype':
                window.open(SkypeLink);
                break;

            case 'mail':
                window.open(GmailLink);
                break;

            case 'telegram':
                window.open(TelegramLink);
                break;


            default:
                console.log('def');
        }
    };


    render() {

        return (
            <div className={'container-fluid main h-100'}>
                <div className="container-fluid row">
                    <img src={Main} alt={'#'} className={'col-8 d-lg-none offset-2 mainImage' }/>
                    <h3 className={'pt-2 d-lg-none'}>Hey there!</h3>
                    <p className={'pt-1 text-justify col-lg-6 d-lg-none'}>
                        Here you can find my social networks, personal website, and some contacts for communication.
                        Fell free to text me...</p>
                </div>



             <div className="container row pt-2 pt-lg-5">
                    <img src={Contact} alt={'#'} onClick={() => this.goToPage('contact')}
                         className={'col-4 col-lg-2 offset-lg-2'}/>
                     <img src={Website} onClick={() => this.goToPage('website')} alt={'#'}
                         className={'col-4 col-lg-2 offset-lg-2'}/>
                   <img src={Gmail} onClick={() => this.goToPage('mail')} alt={'#'}
                         className={'col-4 right col-lg-2 offset-lg-2'}/>
                </div>


                   <div className="container row mt-5">
                   <img src={LinkedIn} onClick={() => this.goToPage('linkedIn')} alt={'#'}
                         className={'col-4 col-lg-2 offset-lg-2'}/>

                    <img src={Instagram} onClick={() => this.goToPage('instagram')} alt={'#'}
                         className={'col-4 col-lg-2 offset-lg-2'}/>

                          <img src={FaceBook} onClick={() => this.goToPage('facebook')} alt={'#'}
                         className={'col-4 col-lg-2 offset-lg-2'}/>

                </div>


                     <div className="container row mt-5">
                    <img src={Skype} alt={'#'} onClick={() => this.goToPage('skype')}
                         className={'col-4 col-lg-2 offset-lg-2'}/>
                         <img src={CouchSerfing} onClick={() => this.goToPage('couchSerfing')} alt={'#'}
                              className={'col-4 col-lg-2 offset-lg-2'}/>
                   <img src={Telegram} onClick={() => this.goToPage('telegram')} alt={'#'}
                         className={'col-4 text-right col-lg-2 offset-lg-2'}/>

                </div>


                  <div className="container row mt-5 pb-5 ">
                    <img src={GitHub} onClick={() => this.goToPage('github')} alt={'#'}
                         className={'col-4 col-lg-2 offset-lg-2'}/>
                    <div className="offset-4  offset-lg-4"/>
                     <img src={Stack} onClick={() => this.goToPage('stack')} alt={'#'}
                         className={'col-4 col-lg-2 offset-lg-2'}/>
                </div>




            </div>
        );
    }
}

export default App;
