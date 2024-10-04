const Header = ({ title, subTitulo }) => {
    const headerStyle = {
        background: '#BEBEBE',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '2px solid #696969'
    }

    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: '#191970'
    }

    return (
      <header style={headerStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <h2>{subTitulo}</h2>
      </header>
    );
}

export default Header;