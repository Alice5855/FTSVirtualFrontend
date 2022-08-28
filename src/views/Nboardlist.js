import React, { Component } from "react";
import { Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Nboardlist extends Component {
    pagination = (type) => {
        alert("Go "+type)
    }
    // page link function
    render(){
        return(
            <div className="container-fluid py-5 px-5" style={{paddingTop:'30%'}}>
                <div>
                    <h1 className="Title" style={{color: '#25C1FF'}}>
                        공지사항
                    </h1>
                    <Button className="btn-sm float-end">
                        새 글 쓰기
                    </Button>
                </div>
                <div id="boardbody" className="list-group w-auto my-5">
                    <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">Title</h6>
                                <p className="mb-0 opacity-75 ms-5">Content</p>
                            </div>
                            <small className="opacity-50 text-nowrap">date</small>
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">Title</h6>
                                <p className="mb-0 opacity-75 ms-5">Content</p>
                            </div>
                            <small className="opacity-50 text-nowrap">date</small>
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">Title</h6>
                                <p className="mb-0 opacity-75 ms-5">Content</p>
                            </div>
                            <small className="opacity-50 text-nowrap">date</small>
                        </div>
                    </a>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <Pagination size="md" aria-label="Page navigation">
                        <PaginationItem>
                            <PaginationLink previous onClick={e => this.pagination("previous")} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick={e => this.pagination("1")}>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick={e => this.pagination("2")}>2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last onClick={e => this.pagination("last")} />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        )
    }
}
export default Nboardlist;