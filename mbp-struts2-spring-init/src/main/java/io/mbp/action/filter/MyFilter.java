package io.mbp.action.filter;

import javax.servlet.*;
import java.io.IOException;

public class MyFilter extends GenericFilter {
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.err.println("doFilter.....");
    }
}
