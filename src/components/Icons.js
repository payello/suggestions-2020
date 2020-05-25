import React from "react"
import LogoFacebook from "react-ionicons/lib/LogoFacebook"
import LogoInstagram from "react-ionicons/lib/LogoInstagram"
import MdMail from "react-ionicons/lib/MdMail"

export const Facebook = props => (
  <a
    rel="noopener noreferrer nofollow"
    target="_blank"
    className="socialLink"
    href="https://facebook.com/thesuggestionsband"
  >
    <LogoFacebook color={props.color} fontSize="24px" />
    {props.title ? props.title : ""}
  </a>
)

export const Instagram = props => (
  <a
    rel="noopener noreferrer nofollow"
    target="_blank"
    className="socialLink"
    href="https://instagram.com/thesuggestions"
  >
    <LogoInstagram color={props.color} fontSize="24px" />
    {props.title ? props.title : ""}
  </a>
)

export const Email = props => (
  <a
    rel="noopener noreferrer nofollow"
    target="_blank"
    className="socialLink"
    href="mailto:thesuggestionsuk@gmail.com?subject=We are looking to book a great band!&body=Hi Tom,%0D%0A%0D%0AWe are looking to book a function band!"
  >
    <MdMail color={props.color} fontSize="24px" />
    {props.title ? props.title : ""}
  </a>
)
