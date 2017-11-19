class Main{

  footer(){
    $.get('footer.html', (ret) => { $('footer').html(ret) });
  }

  nav(active){
    $.get('nav.html', (ret) => {
      $('nav').html(ret)
      if(active){
        $('nav li').find(`.${active}`).addClass('active');
      }
    });
  }

  loadMenuFooter(active=''){
    this.nav(active);
    this.footer();
  }
}
