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
                                <h2>Fundacja “Lorem Ipsum 4”</h2>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="who_table-fund-second">
                                <h2>Fundacja “Lorem Ipsum 5”</h2>
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                <span>ubrania, meble, zabawki</span>
                            </div>
                            <div className="who_table-fund-third">
                                <h2>Fundacja “Lorem Ipsum 6”</h2>
                                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                <span>ubrania, jedzenie, ciepłe koce</span>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="who_table-fund-first">
                                <h2>Fundacja “Lorem Ipsum 7”</h2>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="who_table-fund-second">
                                <h2>Fundacja “Lorem Ipsum 8”</h2>
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                <span>ubrania, meble, zabawki</span>
                            </div>
                            <div className="who_table-fund-third">
                                <h2>Fundacja “Lorem Ipsum 9”</h2>
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
                            <span className="who_table-description-org">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                            <TabList>
                                <Tab>1</Tab>
                                <Tab>2</Tab>
                            </TabList>
                        </div>
                        <TabPanel>
                            <div className="who_table-org-first">
                                <h2>Organizacja “Lorem Ipsum 1”</h2>
                                <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                                <span>Egestas, sed, tempus</span>
                            </div>
                            <div className="who_table-org-second">
                                <h2>Organizacja “Lorem Ipsum 2”</h2>
                                <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                                <span>Ut, aliquam, purus, sit, amet</span>
                            </div>
                            <div className="who_table-org-third">
                                <h2>Organizacja “Lorem Ipsum 3”</h2>
                                <p>Scelerisque in dictum non consectetur a erat nam.</p>
                                <span>Mi, quis, hendrerit, dolor</span>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="who_table-org-first">
                                <h2>Organizacja “Lorem Ipsum 4”</h2>
                                <p>Scelerisque in dictum non consectetur a erat nam.</p>
                                <span>Mi, quis, hendrerit, dolor</span>
                            </div>
                            <div className="who_table-org-second">
                                <h2>Organizacja “Lorem Ipsum 5”</h2>
                                <p>Scelerisque in dictum non consectetur a erat nam.</p>
                                <span>Mi, quis, hendrerit, dolor</span>
                            </div>
                            <div className="who_table-org-third">
                                <h2>Organizacja “Lorem Ipsum 6”</h2>
                                <p>Scelerisque in dictum non consectetur a erat nam.</p>
                                <span>Mi, quis, hendrerit, dolor</span>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                {/*Locals*/}
                <TabPanel>
                    <span className="who_table-description-local">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                    <div className="who_table-loc-first">
                        <h2>Zbiórka “Lorem Ipsum 1”</h2>
                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        <span>Egestas, sed, tempus</span>
                    </div>
                    <div className="who_table-loc-second">
                        <h2>Zbiórka “Lorem Ipsum 2”</h2>
                        <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                        <span>Ut, aliquam, purus, sit, amet</span>
                    </div>
                    <div className="who_table-loc-third">
                        <h2>Zbiórka “Lorem Ipsum 3”</h2>
                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                        <span>Mi, quis, hendrerit, dolor</span>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    </div>
);
export {HomeWhoHelp}