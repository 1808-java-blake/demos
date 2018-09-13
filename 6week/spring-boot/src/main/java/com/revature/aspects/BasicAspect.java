package com.revature.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

//@Component
//@Aspect
public class BasicAspect {

	@Before("allControllerMethods()")
	public void beforeMethod(JoinPoint jp) {
		System.out.println("before method called");
	}

	@After("allControllerMethods()")
	public void afterMethod(JoinPoint jp) {
		System.out.println("after method called");
	}

	@AfterReturning(pointcut = "allControllerMethods()", returning = "obj")
	public void returnedObject(Object obj) {
		System.out.println("after returning");
	}

	@AfterThrowing(pointcut = "allControllerMethods()", throwing = "err")
	public void afterThrowing(Throwable err) {
		System.out.println("method threw an exception");
	}

	@Pointcut("execution(* com.revature.*..*(..))")
	public void allControllerMethods() {
	}

}
