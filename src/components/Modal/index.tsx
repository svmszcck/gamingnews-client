/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ title, content, isActive = false, show }: ModalProps) => {
  return (
    <div className={cn("modal", { "is-active": isActive })}>
      <div onClick={() => show(false)} className="modal-background"></div>
      <div className="modal-card">
        <section className="modal-card-body">
          <h1 className="title has-text-left">
            <FontAwesomeIcon icon={faCheck} className="successIcon" />
            {title}
          </h1>
          <h2 className="subtitle modalContent has-text-left">{content}</h2>

          <div className="field is-grouped is-pulled-right">
            <p className="control">
              <a className="button is-link" onClick={() => show(false)}>
                Okay
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

type ModalProps = {
  title: string;
  content: string;
  isActive: boolean;
  show: Function;
};

export default Modal;
