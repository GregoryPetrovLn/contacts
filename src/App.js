import React, {Component} from 'react';
import {
    Contact,
    CouchSerfing,
    FaceBook,
    GitHub,
    Gmail,
    Instagram,
    LinkedIn,
    Skype,
    Stack,
    Telegram,
    Website
} from "./util";

import {
    CouchSerfingLink,
    FaceBookLink,
    GitHubLink,
    InstagramLink,
    LinkedInLink,
    SkypeLink,
    StackLink,
    TelegramLink,
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

                break;

            case 'skype':
                break;

            case 'gmail':
                break;

            case 'telegram':

                break;


            default:
                console.log('def');
                break;
        }
    };


    render() {

        return (
            <div className={'container-fluid main h-100'}>

                <div className="container">
                    <p className={'text-center pt-1'}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Accusamus ad alias aut beatae corporis
                        dolores eum fuga fugiat impedit
                        inventore iure magni nam quidem,
                        quod reprehenderit sunt tenetur voluptatem
                        voluptates?</p>
                </div>


                <div className="container row pt-2 pt-lg-5">
                    <img src={Website} onClick={() => this.goToPage('website')} alt={'#'} className={'col-4 col-lg-2 offset-lg-2'}/>
                    <img src={GitHub} onClick={() => this.goToPage('github')} alt={'#'} className={'col-4 col-lg-2 offset-lg-2'}/>
                    <img src={Telegram} onClick={() => this.goToPage('telegram')} alt={'#'} className={'col-4 text-right col-lg-2 offset-lg-2'}/>
                </div>

                <div className="container row mt-5">
                    <img src={FaceBook} onClick={() => this.goToPage('facebook')} alt={'#'} className={'col-4 col-lg-2 offset-lg-2'}/>
                    <img src={Instagram} onClick={() => this.goToPage('instagram')} alt={'#'} className={'col-4 col-lg-2 offset-lg-2'}/>
                    <img src={LinkedIn} onClick={() => this.goToPage('linkedIn')} alt={'#'} className={'col-4 col-lg-2 offset-lg-2'}/>
                </div>

                <div className="container row mt-5">
                    <img src={CouchSerfing} onClick={() => this.goToPage('couchSerfing')} alt={'#'}
                         className={'col-4 col-lg-2 offset-lg-2'}/>
                    <img src={Contact} alt={'#'} onClick={() => this.goToPage('contact')} className={'col-4 col-lg-2 offset-lg-2'}/>
                    <img src={Skype} alt={'#'} onClick={() => this.goToPage('skype')} className={'col-4 col-lg-2 offset-lg-2'}/>

                </div>

                <div className="container row mt-5 pb-5 ">
                    <img src={Stack} onClick={() => this.goToPage('stack')} alt={'#'} className={'col-4 col-lg-2 offset-lg-2'}/>
                    <div className="offset-4  offset-lg-4"></div>
                    <img src={Gmail} onClick={() => this.goToPage('gmail')} alt={'#'} className={'col-4 right col-lg-2 offset-lg-2'}/>
                </div>
            </div>
        );
    }
}

export default App;
