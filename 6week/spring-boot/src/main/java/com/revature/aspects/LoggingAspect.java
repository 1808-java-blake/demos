package com.revature.aspects;

import java.util.Arrays;

import org.apache.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

//@Component
//@Aspect
public class LoggingAspect {
	private Logger log = Logger.getRootLogger();

	@Around("allMethods()")
	public Object logger(ProceedingJoinPoint pjp) throws Throwable {
		Object obj = null;
		log.trace("Method called with signature: " + pjp.getSignature());
		log.trace("With arguments: " + Arrays.toString(pjp.getArgs()));

		try {
			// everything prior to pjp.proceed happens before the joinpoint method is called
			obj = pjp.proceed();
			// everything prior to pjp.proceed happens after the jointpoint method is called
			if (obj != null) {
				log.trace("Method with signature: " + pjp.getSignature() + " returned: " + obj.toString());
				return obj;
			} else {
				log.trace("Method with signature: " + pjp.getSignature() + " returned nothing");
				return obj;
			}
		} catch (Throwable e) {
			log.trace(pjp.getSignature() + " threw exception with message: " + e.getMessage());
			throw e;
		}
	}

	@Pointcut("execution(* com.revature.*..*(..)) && !execution(* com.revature.Application.*(..))")
	public void allMethods() {
	}

}
