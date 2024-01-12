import React from "react";
// import instagram1 from "../Images/instagram1.jpg";
// import youtube1 from "../Images/youtube1.jpg";
// import tiktok from "../Images/tiktok.jpg";
// import whatsapp from "../Images/whatsapp.jpg";
import { Col, Row } from "react-bootstrap";

function Footer() {
	return (
		<div>
			<Row style={{ backgroundColor: "pink" }}>
				<Col className="col-3">
					<a href="https://youtube.com">
						<h3>YouTube</h3>
					</a>
				</Col>

				<Col className="col-3">
					<a style={{ color: "black" }} href="https://instagram.com">
						<h3>Instagram</h3>
					</a>
				</Col>

				<Col className="col-3">
					<a style={{ color: "black" }} href="https://whatsapp.com">
						<h3>03404399053</h3>
					</a>
				</Col>

				<Col className="col-3">
					<a style={{ color: "black" }} href="https://tiktok.com">
						<h3>Tik Tok</h3>
					</a>
				</Col>
			</Row>
		</div>
	);
}
export default Footer;
