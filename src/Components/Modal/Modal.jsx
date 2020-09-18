import React from 'react'
import { Modal } from 'react-bootstrap'
import { infoLayouts } from './helpFunction/helpFunc'

export default (props) => {

    const { itemModal, onClose, isOpen, src } = props
    return (
        <Modal show={isOpen} onHide={onClose} >
            {Object.keys(itemModal).length ?
                <>

                    <Modal.Header closeButton>

                        <Modal.Title>
                            {

                                itemModal.kind === 'townhouse'
                                    ? <p>Таунхаус в посёлке '{itemModal.location.settlementName}', {itemModal.location.mkadDistance}км</p>
                                    : <p>Дом в посёлке '{itemModal.location.settlementName}', {itemModal.location.mkadDistance}км</p>
                            }
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal__photo">
                            <img src={src} alt="" width='400' height='300' />
                        </div>
                        <div className="modal__info">
                            <p className='price'>${
                                itemModal.saleOffer
                                    ? itemModal.saleOffer.multiCurrencyPrice.usd
                                    : itemModal.rentOffer.multiCurrencyPrice.usd}</p>
                            <div className="modal__area">
                                <span><strong>{itemModal.specification.bedrooms}</strong> спальни</span>
                                <span><strong>{itemModal.specification.area}</strong> кв. метров</span>
                                <span><strong>{itemModal.landDetails.area}</strong> соток</span>
                            </div>
                        </div>
                        <div className="modal__layouts">
                            <ul>
                                {infoLayouts(itemModal.specification).map(item => {
                                    return <li key={item} className='layout'>{item}</li>
                                })}
                            </ul>
                        </div>



                    </Modal.Body></> : ''}

        </Modal>
    )
}