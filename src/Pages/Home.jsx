import React from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import _ from 'lodash'
import House from '../Components/House/House'
import Modal from '../Components/Modal/Modal'
import { getData, openModal, closeModal } from '../actions/index'

class Home extends React.Component {

    state = {
        currentPage: 0
    }

    componentDidMount() {
        this.props.getData()
    }

    handleOpen = id => {
        this.props.items.forEach(home => {
            if (id === home.id) {
                this.props.handleOpenModal(home)
            }
        })

    }
    handleClose = () => {
        this.props.handleCloseModal()
    }

    sortSrc(src) {
        if (src.includes('PRI')) {
            return src = `http://images.jqestate.ru/${src}-thumbnail-512`

        } else {
            return src = `http://images.jqestate.ru/PRI16435-18bdc7aa-thumbnail-512`
        }

    }

    errorNotData() {
        if (this.props.isLoading === true && !Object.keys(this.props.data).length) {

            return true
        } else {
            return false
        }

    }


    handlePageClick = ({ selected }) => {
        this.setState({ currentPage: selected })
    }

    render() {
        const pageSize = 8
        const { items, isLoading } = this.props
        const { itemModal } = this.props.modal
        const displayData = _.chunk(items, pageSize)[this.state.currentPage]
        return (
            <>
                <div className="container-fluid	" >
                    <div className="row">
                        <div className="col-lg-12 main__item">
                            {this.errorNotData() ? 'Данные не загрузились' :
                                <>
                                    <h2 className='title'>Элитная недвижимость</h2>

                                    <div className="block">
                                        {isLoading && Object.keys(items).length
                                            ?
                                            displayData.map(home => {

                                                const { location, saleOffer, specification, landDetails, rentOffer } = home

                                                return <House
                                                    key={home.id}
                                                    kind={home.kind}
                                                    settlementName={location.settlementName}
                                                    mkadDistance={location.mkadDistance}
                                                    src={this.sortSrc(home.images[0].id)}
                                                    area={specification.area}
                                                    hundred={landDetails.area}
                                                    openM={this.handleOpen}
                                                    id={home.id}
                                                    price={saleOffer
                                                        ? saleOffer.multiCurrencyPrice.usd : rentOffer.multiCurrencyPrice.usd}

                                                    isRent={saleOffer ? false : true}
                                                />
                                            })
                                            :
                                            <div className="loader-wraper">
                                                <div className="lds-dual-ring"></div>
                                            </div>}


                                    </div>
                                    <div className="pagination-block">
                                        <ReactPaginate
                                            previousLabel={'<'}
                                            nextLabel={'>'}
                                            breakLabel={'...'}
                                            breakClassName={'break-me'}
                                            pageCount={32 / pageSize}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={this.handlePageClick}
                                            containerClassName={'pagination'}
                                            pageClassName='page-item'
                                            pageLinkClassName='page-link'
                                            activeClassName={'active'}
                                            previousClassName='page-item'
                                            nextClassName='page-item'
                                            previousLinkClassName='page-link'
                                            nextLinkClassName='page-link'
                                        />
                                    </div>

                                    {
                                        Object.keys(itemModal).length
                                            ? <Modal
                                                itemModal={itemModal}
                                                isOpen={this.props.modal.isOpen}
                                                onClose={this.handleClose}
                                                src={this.sortSrc(itemModal.images[1].id)}
                                            /> : ''
                                    }

                                </>
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(store) {


    return {
        data: store.data,
        items: store.data.items,
        isLoading: store.isLoading,
        modal: store.modal
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getData: () => dispatch(getData()),
        handleOpenModal: (item) => dispatch(openModal(item)),
        handleCloseModal: () => dispatch(closeModal())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)