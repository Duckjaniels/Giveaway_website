import React from 'react';
import Decoration from "../assets/Decoration.svg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const HomeWhoHelp = () => (
    <div className="columns_section" title="section4" id="section4">
            <div className="who_title"><h1> Komu pomagamy?</h1>
                <div className="who_decoration-image"> <img src ={Decoration} alt="decoration"/></div>
            </div>
        <div className="who_table">
            <Tabs>
                <TabList>
                    <Tab>Fundacjom</Tab>
                    <Tab>Organizacjom pozarządowym</Tab>
                    <Tab>Lokalnym zbiórkom</Tab>
                </TabList>
                {/*Fundations*/}
                <TabPanel>
                    <Tabs>
                        <div className="who-table-fund">
                            <span className="who_table-description-fund">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</span>
                            <TabList>
                                <Tab>1</Tab>
                                <Tab>2</Tab>
                                <Tab>3</Tab>
                            </TabList>
                        </div>
                        <TabPanel>
                    <div className="who_table-fund-first">
                        <h2>Fundacja “Dbam o Zdrowie”</h2>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                    </div>
                    <div className="who_table-fund-second">
                        <h2>Fundacja “Dla dzieci”</h2>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        <span>ubrania, meble, zabawki</span>
                    </div>
                    <div className="who_table-fund-third">
                    <h2>Fundacja “Bez domu”</h2>
                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    <span>ubrania, jedzenie, ciepłe koce</span>
                </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="who_table-fund-first">
                                <h2>Fundacja “Dbam o Zdrowie”</h2>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="who_table-fund-second">
                                <h2>Fundacja “Dla dzieci”</h2>
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                <span>ubrania, meble, zabawki</span>
                            </div>
                            <div className="who_table-fund-third">
                                <h2>Fundacja “Bez domu”</h2>
                                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                <span>ubrania, jedzenie, ciepłe koce</span>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="who_table-fund-first">
                                <h2>Fundacja “Dbam o Zdrowie”</h2>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="who_table-fund-second">
                                <h2>Fundacja “Dla dzieci”</h2>
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                <span>ubrania, meble, zabawki</span>
                            </div>
                            <div className="who_table-fund-third">
                                <h2>Fundacja “Bez domu”</h2>
                                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                <span>ubrania, jedzenie, ciepłe koce</span>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                {/*Organizations*/}
                <TabPanel>
                    <Tabs>
                        <div className="who-table-org">
                            <span className="who_table-description-org">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto asperiores atque, cupiditate deserunt dolores esse et exercitationem laboriosam, laborum magni nemo placeat quam quo repellat sapiente soluta vel voluptas!</span>
                            <TabList>
                                <Tab>1</Tab>
                                <Tab>2</Tab>
                            </TabList>
                        </div>
                        <TabPanel>
                            <div className="who_table-org-first">
                                <h2>Fundacja “Dbam o Zdrowie”</h2>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="who_table-org-second">
                                <h2>Fundacja “Dla dzieci”</h2>
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                <span>ubrania, meble, zabawki</span>
                            </div>
                            <div className="who_table-org-third">
                                <h2>Fundacja “Bez domu”</h2>
                                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                <span>ubrania, jedzenie, ciepłe koce</span>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="who_table-org-first">
                                <h2>Fundacja “Dbam o Zdrowie”</h2>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="who_table-org-second">
                                <h2>Fundacja “Dla dzieci”</h2>
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                <span>ubrania, meble, zabawki</span>
                            </div>
                            <div className="who_table-org-third">
                                <h2>Fundacja “Bez domu”</h2>
                                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                <span>ubrania, jedzenie, ciepłe koce</span>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                {/*Locals*/}
                <TabPanel>
                    <span className="who_table-description-local">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at corporis, delectus deserunt dolorem exercitationem facere id impedit ipsum iste numquam optio placeat, praesentium quae rem repellat sunt temporibus velit.</span>
                    <div className="who_table-loc-first">
                        <h2>Fundacja “Dbam o Zdrowie”</h2>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                    </div>
                    <div className="who_table-loc-second">
                        <h2>Fundacja “Dla dzieci”</h2>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        <span>ubrania, meble, zabawki</span>
                    </div>
                    <div className="who_table-loc-third">
                        <h2>Fundacja “Bez domu”</h2>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        <span>ubrania, jedzenie, ciepłe koce</span>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    </div>
);
export {HomeWhoHelp}