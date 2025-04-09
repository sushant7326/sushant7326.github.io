import styled from 'styled-components';

export const HoverEffect = styled.div`
	position: relative;
	
	/* Top-right corner */
	&:before {
		content: '';
		width: 10px;
		height: 10px;
		position: absolute;
		top: 5px;
		right: 5px;
		border-top: 1px solid #fff;
		border-right: 1px solid #fff;
		opacity: 0;
		transition: 0.3s ease-out;
	}
	
	/* Bottom-left corner */
	&:after {
		content: '';
		width: 10px;
		height: 10px;
		position: absolute;
		bottom: 10px;
		left: 5px;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;
		opacity: 0;
		transition: 0.3s ease-out;
	}
	
	&::before, &::after {
		z-index: 1;
	}
	
	.top-left-corner {
		content: '';
		width: 10px;
		height: 10px;
		position: absolute;
		top: 5px;
		left: 5px;
		border-top: 1px solid #fff;
		border-left: 1px solid #fff;
		opacity: 0;
		transition: 0.3s ease-out;
		z-index: 2;
	}
	
	.bottom-right-corner {
		content: '';
		width: 10px;
		height: 10px;
		position: absolute;
		bottom: 10px;
		right: 5px;
		border-bottom: 1px solid #fff;
		border-right: 1px solid #fff;
		opacity: 0;
		transition: 0.3s ease-out;
		z-index: 2;
	}
	
	&:hover:before,
	&:hover:after,
	&:hover .top-left-corner,
	&:hover .bottom-right-corner {
		opacity: 1;
	}
	
	&:active:before,
	&:active:after,
	&:active .top-left-corner,
	&:active .bottom-right-corner {
		opacity: 0;
	}
`;

export const FooterContainer = styled.footer`
	background-color: #1a1a1a;
	color: #fff;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	
	@media (max-width: 1020px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 20px;
	}
`;

export const IconContainer = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 20px;
`;

export const FooterIcon = styled(HoverEffect)`
	font-size: 24px;
	color: #fff;
	cursor: pointer;
	padding: 10px;
`;

export const FooterText = styled.p`
  margin: 0;
  line-height: 1.2;
  color: #fff;
`;