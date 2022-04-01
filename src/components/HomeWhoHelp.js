import React, {useState, useEffect} from 'react';
import Decoration from "../assets/Decoration.svg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../scss/Home/HomeWhoHelp.scss'
import  {foundation, organizations, locals}  from "./data";
import ReactPaginate from 'react-paginate'

function Items({ currentItems }) {
    return (
        <>
            <div className="tab-test">
                {currentItems && currentItems.map((item)=>(
                    <article className={"tab--row"}>
                        <div className={"tab--row--container"}>
                            <div className={"tab--row--main"}>
                                <h3 className={"tab--row--title"}>{item.title}</h3>
                                <p className={"tab--row--paragraph"}>{item.target}</p>
                            </div>
                            <div>
                                <p className={"tab--row--paragraph"}>{item.tags}</p>
                            </div>
                        </div>
                    </article>
                ))
                }
            </div>
        </>
    );
}

function PaginatedItems({ itemsPerPage, name }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(name.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(name.length / itemsPerPage));
        console.log({currentItems})
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % name.length;
        setItemOffset(newOffset);

    };

    return (
        <>
            <Items currentItems={currentItems} />
            {pageCount > 1 && ( <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
            />)}
           )}

        </>
    );
}

const HomeWhoHelp = () => {

return(
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
                        <div className="who-table-fund">
                            <span className="who_table-description-fund">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</span>
                        </div>
                        <div className="who_table-content">
                    <div className="who_table-fund-pag">
                        <PaginatedItems name = {foundation} itemsPerPage={3} />
                    </div>
                </div>
                        </TabPanel>
                {/*Organizations*/}
                <TabPanel>
                        <div className="who-table-org">
                            <span className="who_table-description-org">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>

                        </div>
                            <div className="who_table-org-pag">
                                <PaginatedItems name = {organizations} itemsPerPage={3} />
                            </div>
                </TabPanel>
                {/*Locals*/}
              <TabPanel>
                    <span className="who_table-description-local">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                    <div className="who_table-loc-pag">
                        <PaginatedItems name = {locals} itemsPerPage={3} />
                    </div>
              </TabPanel>
            </Tabs>
        </div>
    </div>
);
}
export {HomeWhoHelp}