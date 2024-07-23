function CommonLayout({children}){

    return (
        <div class="mx-auto max-w-7xl p-6 lg:px-8">
        <main>{children}</main>
    </div>
    );
}

export default CommonLayout